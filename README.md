This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Project Images

The portfolio displays a visual for each project. By default these are placeholder SVGs. Follow the steps below to replace them with real screenshots.

### 1. Prepare your images

Create an `images/` folder inside `public/` and add one image per project:

```
public/
  images/
    stock-inventory.png
    design-system.png
    task-allocation.png
    staff-scheduling.png
```

The file name must match the `"id"` field of the project in `data/projects.json`. Recommended size is **1200×600px** (2:1 ratio). PNG, JPG, or WebP all work.

### 2. Update `components/ProjectVisual.tsx`

Replace the entire file with the following:

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectVisualProps {
  id: string;
  className?: string;
}

export default function ProjectVisual({ id, className = "" }: ProjectVisualProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`bg-surface ${className}`} />;
  }

  return (
    <div className={`bg-surface overflow-hidden relative ${className}`}>
      <Image
        src={`/images/${id}.png`}
        alt={id}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
```

- `fill` — stretches the image to fill its container
- `object-cover object-top` — crops without distorting; anchors to the top so the UI header of your screenshot stays visible
- `onError` — falls back to a blank surface if the image file is missing

### 3. Adding a new project

1. Add a new entry to `data/projects.json` with a unique `"id"`
2. Drop the screenshot at `public/images/<id>.png`

No further code changes are needed — the image path is built from the `id` automatically.

### Quick reference

| What | Where |
|---|---|
| Project images | `public/images/<id>.png` |
| Project IDs | `data/projects.json` — `"id"` field |
| Visual component | `components/ProjectVisual.tsx` |
| Used in project card | `components/Work.tsx` |
| Used in project drawer | `components/ProjectDrawer.tsx` |

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
