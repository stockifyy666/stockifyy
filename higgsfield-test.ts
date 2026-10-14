import { config, higgsfield } from "@higgsfield/client/v2";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

config({
  credentials: process.env.HF_CREDENTIALS,
});

async function main() {
  console.log("Submitting to Seedance 2.5...");

  const result = await higgsfield.subscribe(
    "bytedance/seedance-2.5/text-to-video",
    {
      input: {
        prompt: "A cinematic scene at sunset",
        duration: 5,
        resolution: "720p",
        aspect_ratio: "16:9",
        output_format: "mp4",
        generate_audio: true,
      },
      withPolling: true,
    },
  );

  if (result.status === "completed") {
    console.log("Video URL:", result.video?.url ?? result);
  } else if (result.status === "failed") {
    console.error("Generation failed:", result);
    process.exit(1);
  } else if (result.status === "canceled" || result.status === "moderated") {
    console.warn("Request ended with status:", result.status);
    process.exit(1);
  } else {
    console.log("Result:", JSON.stringify(result, null, 2));
  }
}

main().catch((err) => {
  console.error("Error:", err.message ?? err);
  process.exit(1);
});
