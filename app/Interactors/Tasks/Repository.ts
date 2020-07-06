import DataAccess from './DataAccess.ts'

interface Repository
{
  save(data: DataAccess): Promise<boolean>
}

export default Repository
