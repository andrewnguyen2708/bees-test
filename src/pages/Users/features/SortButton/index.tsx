import IconButton from "@/components/Button/IconButton";
import {
  faArrowDownShortWide,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface ISortButtonProps {
  onSort: (isReverse: boolean) => void;
}

export default function SortButton(props: ISortButtonProps) {
  const { onSort } = props;
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const handleToggle = () => {
    setIsReverse(!isReverse);
  };

  return (
    <IconButton
      color="gray"
      onClick={() => {
        onSort(isReverse);
        handleToggle();
      }}
    >
      <FontAwesomeIcon
        icon={isReverse ? faArrowDownWideShort : faArrowDownShortWide}
      />
    </IconButton>
  );
}
