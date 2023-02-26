import React from "react";
import Image from "next/dist/client/image";
import './Card.module.css';
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  ChatAlt2Icon,
  PaperClipIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";

function CardItem({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <span
            className={`circle-dot
              ${
                data.priority === 0
                  ? "red-dot"
                  : data.priority === 1
                  ? "yellow-dot"
                  : "purple-dot"
              }
              `}
          >
            </span>
            <label className="circle-heading">
          {data.priority === 0
              ? "ContactRM"
              : data.priority === 1
              ? "AgentBook"
              : "DW4RTeam"}
          </label>
          <h5 className="card-title">{data.title}</h5>
          <span className="tag-1">{data.tag1}</span>
          <span className="tag-2">{data.tag2}</span>
          <div className="flex space-x-2 items-center">
            <span className="flex space-x-1 items-center card-action-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>

            </span>
              <span className="flex space-x-1 items-center">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                <span className="attacthment-nummber">{data.chat}</span>
              </span>
              <span className="flex space-x-1 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span className="attacthment-nummber">{data.attachment}</span>
              </span>
            </div>
          <div className="card-last-sec">
            <div><span className="creation-date">{data.creation}</span></div>
            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index} className="card-last-img">
                    <Image
                      src={ass.avt}
                      width="36"
                      height="36"
                      objectFit="cover"
                      className=" rounded-full "
                    />
                  </li>
                );
              })}
             
            </ul>
          </div>
        </div>
        
      )}
    </Draggable>
  );
}

export default CardItem;
