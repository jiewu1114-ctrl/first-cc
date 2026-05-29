# AI Image Generation Skill Overview

This skill enables image generation through 50+ AI models via the inference.sh CLI platform. Users can create images using text prompts, edit existing images, and upscale visuals.

## Key Capabilities

The tool supports "text-to-image, image-to-image, inpainting, LoRA, image editing, upscaling, text rendering." Popular models include GPT-Image-2, FLUX variants, Google Gemini, and ByteDance Seedream.

## Getting Started

Installation requires the belt CLI tool. Users authenticate with `belt login`, then generate images using commands like:

```bash
belt app run falai/flux-dev-lora --input '{"prompt": "a cat astronaut in space"}'
```

## Model Selection

The skill offers diverse options:
- **Speed-focused**: FLUX Klein 4B ($0.0001 per image)
- **Quality-focused**: Seedream 4.5 (2K-4K cinematic output)
- **General purpose**: GPT-Image-2, Gemini 3 Pro
- **Specialized**: Reve (text rendering), Topaz Upscaler (enhancement)

## Related Tools

The platform provides companion skills for specific use cases: video generation, background removal, avatar creation, and upscaling services.
