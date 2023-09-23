  
import { createApexGridWrapper } from '../Table';

type UserInfo = { id: string, name: string };

const UserInfoGrid = createApexGridWrapper<UserInfo>();

function Test2() {
  const data: UserInfo[] = [...];
  const columns: ColumnConfiguration<UserInfo>[] = [...];

  return (
    <div className="app">
      <UserInfoGrid data={data} columns={columns}></UserInfoGrid>
    </div>
  );
}

export default Test2