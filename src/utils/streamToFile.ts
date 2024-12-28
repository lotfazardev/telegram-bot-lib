import { Readable } from 'stream'
import { Blob } from 'buffer'

/**
 * Converts a readable stream into a File with a given name and MIME type.
 *
 * @param stream - The readable stream to convert.
 * @param mimeType - The MIME type for the resulting File.
 * @param fileName - The file name for the resulting File.
 * @returns A Promise that resolves to a File containing the data from the stream.
 */
export async function streamToFile(
  stream: Readable,
  mimeType: string,
  fileName: string
): Promise<File> {
  const chunks: Buffer[] = []

  // Read the stream asynchronously and collect chunks
  for await (const chunk of stream) {
    chunks.push(chunk as Buffer)
  }

  // Concatenate all chunks into a single buffer
  const buffer = Buffer.concat(chunks)

  // Create a Blob from the buffer
  const blob = new Blob([buffer], { type: mimeType })

  // Convert the Blob to a File and return
  return new File([blob], fileName, { type: mimeType })
}
