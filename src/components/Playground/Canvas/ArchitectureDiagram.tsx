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

    const nodes: { id: string; x: number; y: number; comp: Component }[] = [];
    const componentList = Array.from(activeComponents);

    // Structured Layout: Hierarchical
    // Y-coords: Frontend (-200), API (0), Core Services (200), Infra (350)

    // 1. Frontend
    nodes.push({ id: 'frontend', x: 0, y: -200, comp: COMPONENT_LIBRARY['frontend'] });

    // 2. API
    nodes.push({ id: 'api', x: 0, y: 0, comp: COMPONENT_LIBRARY['api'] });

    // 3. Production Entry Points (Top)
    if (isProductionReady) {
      nodes.push({ id: 'cdn', x: -120, y: -300, comp: COMPONENT_LIBRARY['cdn'] });
      nodes.push({ id: 'waf', x: 120, y: -300, comp: COMPONENT_LIBRARY['waf'] });
      nodes.push({ id: 'lb', x: 0, y: -100, comp: COMPONENT_LIBRARY['lb'] });
    }

    // 4. Core Services (Bottom Layer)
    const coreComponents = componentList.filter(id =>
      id !== 'frontend' && id !== 'api' &&
      !['cdn', 'waf', 'lb', 'monitoring', 'read-replica'].includes(id)
    );

    coreComponents.forEach((id, idx) => {
      const spacing = 180;
      const total = coreComponents.length;
      const x = (idx - (total - 1) / 2) * spacing;
      nodes.push({ id, x, y: 200, comp: COMPONENT_LIBRARY[id] });
    });

    // 5. Specialized Infra / Support
    if (isProductionReady) {
      nodes.push({ id: 'monitoring', x: 300, y: 0, comp: COMPONENT_LIBRARY['monitoring'] });
      nodes.push({ id: 'read-replica', x: 0, y: 350, comp: COMPONENT_LIBRARY['read-replica'] });
    }

    setNodes(nodes);
    setEdges(activeEdges);
  }, [capabilities, isProductionReady]);

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
