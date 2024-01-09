import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import Button from "../components/Button/Button";

const Details = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBtnBackClick = useCallback(() => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => {
      setCountry(data[0]);
    });
  }, [name]);

  return (
    <div>
      <Button onClick={handleBtnBackClick}>
        <IoArrowBack /> Back
      </Button>
      {name}
    </div>
  );
};

export default Details;
