import dynamic from "next/dynamic";

const DivisionGroupsDemo = dynamic(() => import("./DivisionGroupsDemo"));

export * from "./DivisionGroupsDemo";
export default DivisionGroupsDemo;
