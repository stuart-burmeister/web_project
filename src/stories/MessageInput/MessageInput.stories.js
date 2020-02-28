import React from "react";
import { MessageInput } from "../../components";

export default {
  component: MessageInput,
  title: "Message Input",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <MessageInput setMessage={(msg)=>{
    console.log(msg);
  }}/>
}