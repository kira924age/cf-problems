import React from "react";
import { Table } from "antd";

import {
  makeContestColumns,
  makeContestTable,
  filterProblems
} from "./contestTableUtils";

import {
  cachedUserSubmissions ,
  cachedContestArray,
} from "../../utils/TypedCachedApiClient";

import ErrorMessage from "./ErrorMessage";

interface ContestTableProps {
  name: string;
  isShowDifficulty: boolean;
  userId: string | undefined;
}

const ContestTable: React.FC<ContestTableProps> = (props) => {
  const [isFetchFailue, setIsFetchFailue] = React.useState(false);
  const [acList, setAcList] = React.useState(new Map());

  React.useEffect(() => {
    let isMounted = true;
    if (props.userId === undefined || props.userId === "") {
      if (isMounted) {
        setAcList(new Map());
      }
      return;
    }

    const getUserSubmissions = async () => {
      const [userSubmission] = await Promise.all([
        cachedUserSubmissions(String(props.userId)),
      ]);

      if (isMounted) {
        if (userSubmission === null) {
          setIsFetchFailue(true);
          setAcList(new Map());
        } else {
          setIsFetchFailue(false);
          setAcList(userSubmission);
        }
      }
    };

    void getUserSubmissions();

    return () => {
      isMounted = false;
    };
  }, [props.userId]);

  const allProblems = cachedContestArray();
  let problemData = filterProblems(props.name, allProblems);

  let contestTable = makeContestTable(problemData, props.isShowDifficulty, acList);

  const columns = makeContestColumns(props.name);

  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      {isFetchFailue && <ErrorMessage />}
      <Table
        pagination={{
          defaultPageSize: 50,
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
        bordered
        className="ant-contest-table"
        columns={columns}
        dataSource={contestTable}
      />
    </React.Fragment>
  );
};

export default ContestTable;