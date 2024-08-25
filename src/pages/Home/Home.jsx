import MainLayout from "@components/Layout/MainLayout/MainLayout";
import JobsList from "@modules/Jobs/JobsList/JobsList";

function Home() {
  return (
    <MainLayout 
        sideBar={<h1>SideBar</h1>}
    >
      <JobsList/>
    </MainLayout>
  );
}

export default Home;