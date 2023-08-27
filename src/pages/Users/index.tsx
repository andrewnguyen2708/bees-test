import { IUser } from "@/Type/Users";
import Button from "@/components/Button";
import IconButton from "@/components/Button/IconButton";
import Checkbox from "@/components/Checkbox";
import Dialog from "@/components/Dialog";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import Tooltip from "@/components/Tooltip";
import { formatCurrency, formatDate } from "@/utils";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createUsers } from "./FakeData/Users";
import SortButton from "./features/SortButton";
import Status from "./features/Status/Status";
import { sortByBalance, sortByDate, sortByName } from "./features/utils";
import "./styles.scss";

export default function Users() {
  // Modal comfirm delete
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);
  // list user id to delete
  const [deleteIDs, setDeteleIDs] = useState<string[]>([]);
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    const findId = selectedIDs.find((selectedID) => selectedID === id);
    if (findId) {
      const newSelectedIDs = selectedIDs.filter(
        (selectedID) => selectedID !== findId
      );
      setSelectedIDs(newSelectedIDs);
    } else {
      const newSelectedIDs = [...selectedIDs, id];
      setSelectedIDs(newSelectedIDs);
    }
  };

  const handleSelectAll = () => {
    if (selectedIDs.length < users.length) {
      const newSelected = users.map((user) => user.id);
      setSelectedIDs(newSelected);
    } else {
      setSelectedIDs([]);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    if (deleteIDs.length > 0) {
      let newUsers = [...users];
      deleteIDs.forEach((id) => {
        newUsers = newUsers.filter((user) => user.id !== id);
      });
      setUsers(newUsers);
    }
  };

  const handleChangePage = () => {
    const newUsers = createUsers(10);
    setUsers(newUsers);
  };

  useEffect(() => {
    setLoading(true);
    const timeoutID = setTimeout(() => {
      const newUsers = createUsers(10);
      setUsers(newUsers);
      setLoading(false);
      clearTimeout(timeoutID);
    }, 1000);
  }, []);

  useEffect(() => {
    const newSelectedIDs = selectedIDs.filter((id) =>
      users.some((user) => user.id === id)
    );
    setSelectedIDs(newSelectedIDs);
  }, [users]);

  return (
    <div>
      <h1>USERS MANAGEMENT</h1>
      <div className="wrapper-table">
        <div>
          <Button
            color="error"
            onClick={() => {
              handleOpenDialog();
              setDeteleIDs(selectedIDs);
            }}
            disabled={selectedIDs.length === 0}
          >
            Delete {selectedIDs.length} users
          </Button>
        </div>
        <div style={{ overflowX: "auto" }}>
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
                    <Checkbox
                      checked={
                        selectedIDs.length > 0 &&
                        selectedIDs.length === users.length
                      }
                      onClick={handleSelectAll}
                    />
                  </div>
                </th>
                <th style={{ width: "20%", whiteSpace: "nowrap" }}>
                  <span>Name </span>
                  <SortButton
                    onSort={(isReverse) => {
                      const newUsers = sortByName(users);
                      if (isReverse) {
                        newUsers.reverse();
                      }
                      setUsers(newUsers);
                    }}
                  />
                </th>
                <th
                  style={{
                    width: "15%",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Balance ($) </span>
                  <SortButton
                    onSort={(isReverse) => {
                      const newUsers = sortByBalance(users);
                      if (isReverse) {
                        newUsers.reverse();
                      }
                      setUsers(newUsers);
                    }}
                  />
                </th>
                <th style={{ width: "20%" }}>Email</th>
                <th style={{ width: "15%", whiteSpace: "nowrap" }}>
                  <span>Registration </span>
                  <SortButton
                    onSort={(isReverse) => {
                      const newUsers = sortByDate(users);
                      if (isReverse) {
                        newUsers.reverse();
                      }
                      setUsers(newUsers);
                    }}
                  />
                </th>
                <th style={{ width: "15%" }}>Status</th>
                <th style={{ width: "15%", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="checkbox">
                      <div>
                        <Checkbox
                          checked={selectedIDs.some((id) => id === user.id)}
                          onClick={() => {
                            handleSelect(user.id);
                          }}
                        />
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
                        title={formatDate(
                          user.registerAt,
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                      >
                        {formatDate(user.registerAt)}
                      </Tooltip>
                    </td>
                    <td>
                      <Status status={user.active} />
                    </td>
                    <td>
                      <div className="action">
                        {/* <Tooltip title="edit">
                          <IconButton color="primary" fontSize="1.8rem">
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </IconButton>
                        </Tooltip> */}
                        <Tooltip title="delete">
                          <IconButton
                            color="error"
                            fontSize="1.8rem"
                            onClick={() => {
                              handleOpenDialog();
                              setDeteleIDs([user.id]);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
              {!loading && users.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center" }}>
                    No users show
                  </td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center" }}>
                    <Loading />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <Pagination
            totalPages={10}
            recordsPerPage={users.length}
            totalRecords={90 + users.length}
            onChangePage={handleChangePage}
          />
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        title="Delete Users"
        content="Are you sure you want to delete users list?"
        action={
          <>
            <Button
              onClick={() => {
                handleDelete();
                handleCloseDialog();
              }}
              color="error"
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={handleCloseDialog}>
              No
            </Button>
          </>
        }
      />
    </div>
  );
}
