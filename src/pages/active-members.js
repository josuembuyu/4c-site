import Layout from "components/Layout"
import ActiveMembers from "components/ActiveMembers"

export default function Home() {
  return (
    <Layout className="flex flex-col justify-start mt-[7rem]">
      <ActiveMembers />
    </Layout>
  )
}
