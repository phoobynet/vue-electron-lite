const { ipcRenderer } = window.require('electron')

/**
 * Invokes a method on the main process.
 * @param channel
 * @param params
 */
export const invokeMainHandler = async <T>(channel: string, ...params: unknown[]): Promise<T> => {
  return ipcRenderer.invoke(channel, ...params) as T
}
