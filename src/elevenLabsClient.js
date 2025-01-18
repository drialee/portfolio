import { ElevenLabsClient, play } from "elevenlabs";

const eleven_labs = new ElevenLabsClient({
  apiKey: "sk_9797757ba464ebc5418a8a191c612c597aed5cd5790746f4",
});

async function fetchSpeech(text, voiceId, apiKey) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2",
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Error from ElevenLabs: ${response.status} ${response.statusText}`
    );
  }

  // This should return an ArrayBuffer or Blob (depending on how you handle it)
  const arrayBuffer = await response.arrayBuffer();
  return arrayBuffer;
}

export async function translate_to_speech(input) {
  try {
    const audio = await eleven_labs.textToSpeech.convert(
      "JBFqnCBsd6RMkjVDRZzb",
      {
        output_format: "mp3_44100_128",
        text: "text",
        model_id: "eleven_multilingual_v2",
      }
    );
    // play(audio);
    // Convert the ArrayBuffer/Buffer into a Blob
    const audioBlob = new Blob([audio], { type: "audio/mpeg" });

    // Create a temporary URL for the Blob
    const audioURL = URL.createObjectURL(audioBlob);

    // Create a new Audio element and play
    const audioElement = new Audio(audioURL);
    audioElement.play();
  } catch (error) {
    console.error("ElevenLabs Error:", error);
  }
}
