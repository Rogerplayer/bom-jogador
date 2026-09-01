import { Navigate, useLocation } from 'react-router-dom'
import { useApiKey } from '../../hooks/useApiKey'

function RequireApiKey({ children }) {
  const { hasKey } = useApiKey()
  const location = useLocation()

  if (hasKey === null) {
    return <progress className="progress is-small is-primary" max="100" />
  }

  if (!hasKey) {
    return <Navigate to="/setup" state={{ from: location.pathname }} replace />
  }

  return children
}

export default RequireApiKey
