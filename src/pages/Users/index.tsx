import IconButton from "@/components/Button/IconButton";
import Checkbox from "@/components/Checkbox";
import Pagination from "@/components/Pagination";
import Tooltip from "@/components/Tooltip";
import { formatCurrency, formatDate } from "@/utils";
import {
  faArrowDownWideShort,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./features/Status/Status";
import "./styles.scss";
import { useState } from "react";
import Dialog from "@/components/Dialog";
import Button from "@/components/Button";

interface IUser {
  id: string;
  name: string;
  balance: number;
  email: string;
  registerAt: Date;
  active: boolean;
}

export default function Users() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const users: IUser[] = [
    {
      id: "1",
      name: "Andrew",
      balance: 2659,
      email: "trangnv.2708@gmail.com",
      registerAt: new Date(),
      active: true,
    },
    {
      id: "2",
      name: "Mai",
      balance: 2659,
      email: "trangnv.2708@gmail.com",
      registerAt: new Date(),
      active: false,
    },
    {
      id: "3",
      name: "John",
      balance: 2659,
      email: "trangnv.2708@gmail.com",
      registerAt: new Date(),
      active: true,
    },
    {
      id: "4",
      name: "Shara",
      balance: 2659,
      email: "trangnv.2708@gmail.com",
      registerAt: new Date(),
      active: true,
    },
  ];

  return (
    <div>
      <h1>Users list</h1>
      <div className="wrapper-table">
        <table className="users-table">
          <thead>
            <tr>
              <th
                className="checkbox"
                style={{
                  width: "5%",
                }}
              >
                <div>
                  <Checkbox />
                </div>
              </th>
              <th style={{ width: "20%" }}>
                Name{" "}
                <IconButton color="gray">
                  <FontAwesomeIcon icon={faArrowDownWideShort} />
                </IconButton>
              </th>
              <th style={{ width: "15%", textAlign: "right" }}>Balance ($)</th>
              <th style={{ width: "20%" }}>Email</th>
              <th style={{ width: "10%" }}>Registration</th>
              <th style={{ width: "15%" }}>Status</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="checkbox">
                  <div>
                    <Checkbox />
                  </div>
                </td>
                <td>{user.name}</td>
                <td style={{ textAlign: "right" }}>
                  {formatCurrency(user.balance)}
                </td>
                <td>
                  <a href="" className="email">
                    {user.email}
                  </a>
                </td>
                <td className="date">
                  <Tooltip
                    width="120px"
                    title={formatDate(user.registerAt, "YYYY-MM-DD HH:mm:ss")}
                  >
                    {formatDate(user.registerAt)}
                  </Tooltip>
                </td>
                <td>
                  <Status status={user.active} />
                </td>
                <td>
                  <div className="action">
                    <Tooltip title="edit">
                      <IconButton color="primary" fontSize="1.8rem">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="delete">
                      <IconButton
                        color="error"
                        fontSize="1.8rem"
                        onClick={handleOpenDialog}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalPages={6} />
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        title="Delete Account"
        content="Are you sure you want to delete your account?"
        action={
          <>
            <Button>Yes</Button>
            <Button color="error" onClick={handleCloseDialog}>
              No
            </Button>
          </>
        }
      />
    </div>
  );
}
