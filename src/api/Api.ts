interface IRequestProps {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

export async function ApiClient<IResponse>({
  url,
  method = 'GET',
  body,
}: IRequestProps): Promise<IResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_PREFIX}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data ?? 'Неизвестная ошибка')
  }

  return data
}
