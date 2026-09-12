"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPONENT_LIBRARY, CAPABILITY_MAP, PRODUCTION_UPGRADES, Component, Edge } from "@/data/playground-map";
import { ComponentNode } from "./ComponentNode";
import { ConnectionEdge } from "./ConnectionEdge";

interface Props {
  capabilities: string[];
  isProductionReady: boolean;
}

export function ArchitectureDiagram({ capabilities, isProductionReady }: Props) {
  const [nodes, setNodes] = React.useState<{ id: string; x: number; y: number; comp: Component }[]>([]);
  const [edges, setEdges] = React.useState<Edge[]>([]);

  React.useEffect(() => {
    const activeComponents = new Set<string>(['frontend', 'api']);
    const activeEdges: Edge[] = [{ from: 'frontend', to: 'api' }];

    capabilities.forEach(cap => {
      const mapping = CAPABILITY_MAP[cap as keyof typeof CAPABILITY_MAP];
      if (mapping) {
        mapping.components.forEach(c => activeComponents.add(c));
        mapping.edges.forEach(e => activeEdges.push(e));
      }
    });

    if (isProductionReady) {
      PRODUCTION_UPGRADES.components.forEach(c => activeComponents.add(c));
      PRODUCTION_UPGRADES.edges.forEach(e => activeEdges.push(e));
    }

    // Simple Layout Logic
    const nodes: { id: string; x: number; y: number; comp: Component }[] = [];
    const componentList = Array.from(activeComponents);

    //- Frontend: top
    nodes.push({ id: 'frontend', x: 0, y: -150, comp: COMPONENT_LIBRARY['frontend'] });
    //- API: center
    nodes.push({ id: 'api', x: 0, y: 0, comp: COMPONENT_LIBRARY['api'] });

    // Other components in a circle/grid around API
    let angle = 0;
    const radius = 180;
    componentList.forEach(id => {
      if (id === 'frontend' || id === 'api') return;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      nodes.push({ id, x, y, comp: COMPONENT_LIBRARY[id] });
      angle += (2 * Math.PI) / (componentList.length - 2);
    });

    // Special production positioning
    if (isProductionReady) {
      const lb = nodes.find(n => n.id === 'lb');
      if (lb) { lb.x = 0; lb.y = -75; }
      const cdn = nodes.find(n => n.id === 'cdn');
      if (cdn) { cdn.x = -100; cdn.y = -225; }
      const waf = nodes.find(n => n.id === 'waf');
      if (waf) { waf.x = 100; waf.y = -225; }
    }

    setNodes(nodes);
    setEdges(activeEdges);
  }, [capabilities, isProductionReady]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--border)" />
            </marker>
            <marker id="arrowhead-accent" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
            </marker>
          </defs>

          <AnimatePresence>
            {edges.map((edge, idx) => {
              const fromNode = nodes.find(n => n.id === edge.from);
              const toNode = nodes.find(n => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              return (
                <ConnectionEdge
                  key={`${edge.from}-${edge.to}`}
                  from={{ x: fromNode.x, y: fromNode.y }}
                  to={{ x: toNode.x, y: toNode.y }}
                  isAccent={isProductionReady}
                />
              );
            })}
          </AnimatePresence>
        </svg>

        <AnimatePresence>
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                position: 'absolute',
                left: `${node.x}px`,
                top: `${node.y}px`,
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              <ComponentNode component={node.comp} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
