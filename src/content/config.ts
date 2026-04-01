import { defineCollection, z } from 'astro:content';

// ── Players Collection ──────────────────────────────────────────────────────
const players = defineCollection({
  type: 'data',
  schema: z.object({
    name:     z.string(),
    number:   z.number().optional(),
    position: z.string(),
    team:     z.enum(['Lorchos', 'Lorchas']),
    image:    z.string().optional().default('/images/player-placeholder.svg'),
    bio:      z.string().optional(),
    from:     z.string().optional(),
    since:    z.number().optional(),
    captain:  z.boolean().optional().default(false),
  }),
});

// ── Matches Collection ──────────────────────────────────────────────────────
const matches = defineCollection({
  type: 'data',
  schema: z.object({
    date:        z.string(),               // ISO date string
    time:        z.string().optional(),    // "16:00"
    opponent:    z.string(),
    venue:       z.string(),
    isHome:      z.boolean().default(true),
    competition: z.string().optional().default('Liga Galega'),
    team:        z.enum(['Lorchos', 'Lorchas', 'Ambos']).default('Lorchos'),
    result: z.object({
      goalsFor:     z.number(),
      goalsAgainst: z.number(),
      pointsFor:    z.number(),
      pointsAgainst: z.number(),
    }).optional(),
  }),
});

// ── News Collection ─────────────────────────────────────────────────────────
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    image:       z.string().optional(),
    category:    z.enum(['Resultados', 'Club', 'Fichaxes', 'Eventos']).default('Club'),
    featured:    z.boolean().optional().default(false),
    author:      z.string().optional().default('GB Lorchos'),
  }),
});

export const collections = { players, matches, news };
