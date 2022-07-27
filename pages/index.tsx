import type { NextPage } from 'next'
import { ManagedEditor } from 'react-inline-node-editor-bigkit'
import ManagedMenu from '../managed-components/components/ManagedMenu'
import PageContainer from './components/PageContainer'
import { schema } from '../managed-components/schema'

const Home: NextPage = () => {
  return <PageContainer title='main' description='todo'>
    <ManagedMenu />
    <ManagedEditor id={"index"} schema={schema} model={require("./index.json")} />
  </PageContainer>
}

export default Home
