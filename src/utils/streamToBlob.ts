import { Readable } from 'stream'
import { Blob } from 'buffer'

/**
 * Converts a readable stream into a Blob.
 *
 * @param stream - The readable stream to convert.
 * @param mimeType - The MIME type for the resulting Blob.
 * @returns A Promise that resolves to a Blob containing the data from the stream.
 */
export async function streamToBlob(stream: Readable, mimeType: string): Promise<Blob> {
  const chunks: Buffer[] = []

  // Read the stream asynchronously and collect chunks
  for await (const chunk of stream) {
    chunks.push(chunk as Buffer)
  }

  // Concatenate all chunks into a single buffer
  const buffer = Buffer.concat(chunks)

  // Create a Blob from the buffer
  return new Blob([buffer], { type: mimeType })
}
