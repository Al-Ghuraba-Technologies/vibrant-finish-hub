

## Plan: Replace About Section Image

The current about section uses `src/assets/about-img.jpg` which shows a man. We'll generate a new image of a beautifully painted house (no people) and replace it.

### Steps

1. **Generate new image** using Nano banana 2 (google/gemini-3.1-flash-image-preview) with prompt: "A beautifully painted modern house exterior with vibrant fresh paint in warm tones, no people, professional real estate photography style, bright daylight, well-maintained garden"
2. **Save** the generated image as `src/assets/about-img.jpg` (overwrite existing)

No component code changes needed — the import already references this file.

