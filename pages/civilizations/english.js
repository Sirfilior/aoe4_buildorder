import Buildlist from "../../components/buildlist";
import Civlayout from "../../components/civlayout";
import { getBuilds } from "../../lib/data";

function English({builds}) {
  return (
    <Civlayout>
      <div>English</div>
      <Buildlist builds={builds} />
    </Civlayout>
  );
}

export async function getStaticProps() {
  const builds = await getBuilds("en");
  return {
    props: {
      builds: builds,
    },
  };
}
export default English
