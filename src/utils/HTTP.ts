import axios, { AxiosRequestConfig } from 'axios'

type Request = {
  url: string
  config?: AxiosRequestConfig
}

type Handlers<T> = {
  onSuccess: (response: T) => void
  onError?: (error: Error) => void
}

interface HTTPInterface {
  readonly get: <T>(request: Request, handlers: Handlers<T>) => void
}

class HTTP implements HTTPInterface {
  readonly get = async <T>(req: Request, handlers: Handlers<T>) => {
    try {
      const response = await axios.get<T>(req.url, req.config)
      handlers.onSuccess(response.data)
    } catch (err) {
      console.error(err)

      if (handlers.onError) {
        handlers.onError(err)
      }
    }
  }
}

export default new HTTP()
