import React, { useEffect, useState } from "react";
import axios from "axios";

import Paginate from "./Paginate.tsx";
import ErrorModal from "./ErrorModal.tsx";


interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const Giphy: React.FC = () => {
  const [data, setData] = useState<Gif[]>([]);
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Gif[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const [error, setError] = useState<{ title: string; message: string } | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "VDPXsmjG1dVpwvgTdJ0jH1znUNKw6z7I",
            limit: 100,
          },
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter something ;)",
      });
      return;
    }

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "VDPXsmjG1dVpwvgTdJ0jH1znUNKw6z7I",
          q: search,
          limit: 1000,
        },
      });
      setData(results.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const pageSelected = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className="m-2">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="header1">
        <h1>GIPHY SEARCH</h1>
      </div>
      <div className="container ">
        <form className=" form-inline justify-content-center mt-5 item-1 ">
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="search"
            className="form-control-lg search "
            required
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary btn-lg mx-4 "
          >
            Go
          </button>
        </form>

        {currentItems[0] && (
          <div key={currentItems[0].id} className={"git "}>
            <img src={currentItems[0].images.fixed_height.url} />
          </div>
        )}
        {currentItems[1] && (
          <div key={currentItems[1].id} className={"git"}>
            <img src={currentItems[1].images.fixed_height.url} />
          </div>
        )}

        {currentItems[2] && (
          <div key={currentItems[2].id} className={"git"}>
            <img src={currentItems[2].images.fixed_height.url} />
          </div>
        )}
        {currentItems[3] && (
          <div key={currentItems[3].id} className={"git"}>
            <img src={currentItems[3].images.fixed_height.url} />
          </div>
        )}
        {currentItems[4] && (
          <div key={currentItems[4].id} className={"git"}>
            <img src={currentItems[4].images.fixed_height.url} />
          </div>
        )}
        {currentItems[5] && (
          <div key={currentItems[5].id} className={"git item-5"}>
            <img src={currentItems[5].images.fixed_height.url} />
          </div>
        )}
        {currentItems[6] && (
          <div key={currentItems[6].id} className={"git"}>
            <img src={currentItems[6].images.fixed_height.url} />
          </div>
        )}
        {currentItems[7] && (
          <div key={currentItems[7].id} className={"git"}>
            <img src={currentItems[7].images.fixed_height.url} />
          </div>
        )}
        {currentItems[8] && (
          <div key={currentItems[8].id} className={"git"}>
            <img src={currentItems[8].images.fixed_height.url} />
          </div>
        )}
        {currentItems[9] && (
          <div key={currentItems[9].id} className={"git"}>
            <img src={currentItems[9].images.fixed_height.url} />
          </div>
        )}
      </div>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
    </div>
  );
};

export default Giphy;

