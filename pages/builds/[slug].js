import Civlayout from "../../components/civlayout";
import { getBuilds, getBuild } from "../../lib/data";
import TypeIcon from "../../components/icon";

function Build({ build }) {
  return (
    <Civlayout title={`${build.name} [${build.type}]`}>
      <div className="mt-4 bg-bluedark p-4">
        <div>
          {build.timeline.map((timeentry, i) => (
            <div key={i} className="border-2 border-yellow px-4 py-2 mb-2 flex">
              <div className="flex flex-grow">
                <div className="flex-grow">
                  <div className="px-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                      <div>
                        <TypeIcon type={timeentry.type} />
                      </div>
                      <div>
                        <h4>{timeentry.selection}</h4>
                      </div>
                    </div>
                    <div>
                      <TypeIcon type={timeentry.target} />
                    </div>
                  </div>
                </div>
                {timeentry.chain && (
                  <>
                    {timeentry.chain.map((chainItem, i) => (
                      <div key={i} className="flex-grow">
                        <div className="px-2 flex justify-between">
                          <div className="flex gap-2 items-center">
                            <div>
                              <TypeIcon type={timeentry.type} />
                            </div>
                            <div>
                              <h4>{chainItem.selection}</h4>
                            </div>
                          </div>
                          <div>
                            <TypeIcon type={chainItem.target} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="px-2 text-white border-l-2">
                <span>{timeentry.setup.food} F</span>
                <span>{timeentry.setup.wood} W</span>
                <span>{timeentry.setup.gold} G</span>
                <span>{timeentry.setup.stone} S</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Civlayout>
  );
}

export async function getStaticPaths() {
  const builds = await getBuilds("");
  // Get the paths we want to pre-render based on posts
  const paths = builds.map((build) => ({
    params: { slug: build.filename },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const build = await getBuild(params.slug);
  return {
    props: {
      build: build,
    },
  };
}

export default Build;
