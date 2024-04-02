import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Select(props: { name: string; multiple: boolean; id: string; className: string; options: { value: string | number | readonly string[]; selected: boolean; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; }; }){
    return (
      <>
          <select multiple={props.multiple} name={props.name} id={props.id} className={props.className}>
              <option value={props.options.value} selected={props.options.selected}>{props.options.label}</option>
          </select>
      </>
    );
}