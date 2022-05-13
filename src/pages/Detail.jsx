import React from "react";
import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import { Huile } from "../BDD/DataHuile";
import { Algue } from "../BDD/DataAlgue";
import { Levure } from "../BDD/DataLevure";
import { Ail } from "../BDD/DataAil";
import {Mootral} from '../BDD/DataMootral';

export default function Detail() {
  let { id } = useParams();
return (
<div className="titleDetail">
</div>
)
}