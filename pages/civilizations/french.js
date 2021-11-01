import Civlayout from "../../components/civlayout";
import Buildlist from "../../components/buildlist";
import {getBuilds} from "../../lib/data";

function French({builds}) {
  return (
    <Civlayout title="French">
      <div className="mt-4">
        <Buildlist builds={builds} />
      </div>
    </Civlayout>
  );
}

export async function getStaticProps() {
  const builds = await getBuilds("fr");
  return {
    props: {
      builds: builds,
    },
  };
}

export default French;
