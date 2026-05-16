# ZOOR Visual Studio Development Rules

## Product Direction

- Build this as a high-end cinematic portfolio for an AI film and brand visual studio.
- Keep the tone minimal, black, spatial, and editorial.
- Avoid cheap sci-fi tropes, noisy particle fields, glossy game UI, and decorative clutter.
- Prioritize large media, slow motion, generous spacing, and restrained interaction.

## Frontend Rules

- Use Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, drei, GSAP, and Lenis.
- Keep content data in `data/works.ts` so media and copy can be replaced without digging through components.
- Use `poster` images for videos and avoid loading preview videos until hover or explicit interaction.
- Mobile should use simpler motion and weaker 3D effects for performance.
- Components should remain focused: page composition in `app`, reusable interactions in `components`, content in `data`.

## Visual Interaction Rules

- Motion should feel slow, cinematic, and precise. No bounce effects.
- 3D should be an accent: light, reflection, parallax, depth. No heavy models.
- Work cards can tilt subtly on desktop pointer hover; mobile should stay stable.
- Text must remain readable over media with dark overlays and clear hierarchy.

## Asset Rules

- Place work assets under `public/works/[slug]/`.
- Expected files for each project are `poster.jpg`, `preview.mp4`, and `main.mp4`.
- Extra key visuals can use names like `key-01.jpg`, `key-02.jpg`, and `key-03.jpg`.
- Keep large videos compressed for web delivery.

## Quality Checks

- Run `npm run lint` before delivery.
- Check desktop and mobile layouts after major visual changes.
- Do not introduce unrelated refactors when updating portfolio content.
