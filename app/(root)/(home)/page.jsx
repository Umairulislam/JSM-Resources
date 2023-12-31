import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import Header from "@/components/Header";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import React from "react";

export const revalidate = 900;

const page = async ({ searchParams }) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: 1,
  });

  const resourcesPlaylist = await getResourcesPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="relative bg-banner bg-cover bg-center text-center flex-center min-h-[275px] w-full flex-col rounded-xl">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Javascript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No resources found</p>
            )}
          </div>
        </section>
      )}
      {resourcesPlaylist.map((item) => (
        <section
          key={item._id}
          className="flex-center mt-6 w-full flex-col sm:mt-20"
        >
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default page;
