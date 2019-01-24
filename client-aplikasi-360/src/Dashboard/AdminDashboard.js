import React from "react";
import { Table, Button } from "antd";

import { getQuestions, getUsers } from "../Fetch/GetData";

import { dapatkanNilai } from "../Calcultaion/filter";

async function getNilai(URL) {
  const users = await getUsers(URL);
  const questions = await getQuestions(URL);
  const nilai = dapatkanNilai(users, questions);
  return nilai;
}

class TablePenilaian extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    tabelUtama: true,
    dataTotal: [],
    dataDetail: [],
  };

  componentDidMount() {
    const nilai = getNilai(this.props.URL);
    nilai.then(data => {
      this.setState({
        dataTotal: data
      });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state.nilai)
  // }

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  getDetail = nip_nim => {
    let lenDetail = this.state.dataDetail.length;
    let lenTotal = this.state.dataTotal.length;

    // Can't clear state with this
    // this.setState({ dataDetail: [] });

    for (let i = 0; i < lenTotal; i++) {
      if (nip_nim === this.state.dataTotal[i].nip_nim) {
        // This will always replace array[0] with new one
        this.state.dataDetail.splice(0, lenDetail);

        // This keeps adding item to array, that's ok because
        // We can reset it 0 by removing element as the above splice
        this.state.dataDetail.push(this.state.dataTotal[i]);

        // This produces error
        // this.setState({
        //   dataDetail: this.state.dataTotal[i]
        // });
      }
    }
  };

  onChangeTable = (nip_nim, record) => {
    // console.log("thisEvent", thisEvent);
    // console.log("nip", nip_nim);
    // console.log("record", record);
    if (record) {
      // this.getDetilPenilaian(nip_nim);
      this.getDetail(nip_nim);
      this.setState({
        tabelUtama: false
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true
      });
    }
  };

  render() {
    const { tabelUtama, dataTotal, dataDetail } = this.state;
    

    let {
      sortedInfo
    } = this.state;

    sortedInfo = sortedInfo || {};
    
    const columns = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim - b.nip_nim,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span>
            <span
              onClick={this.onChangeTable.bind(this, record.nip_nim, true)}
              style={{ cursor: "pointer" }}
            >
              {record.name}
            </span>
          </span>
        )
      },
      {
        title: "Total Nilai P",
        dataIndex: "total",
        key: "total",
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === "total" && sortedInfo.order
      },
      {
        title: "Hasil",
        dataIndex: "hasil",
        key: "hasil",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "hasil" && sortedInfo.order
      }
    ];

    const columnDetail = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim.length - b.nip_nim.length,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span onClick={this.onChangeTable.bind(this, record.nip_nim, true)}>
            {record.name}
          </span>
        )
      },
      {
        title: "Nilai P",
        dataIndex: "p1",
        key: "p1",
        sorter: (a, b) => a.p1 - b.p1,
        sortOrder: sortedInfo.columnKey === "p1" && sortedInfo.order
      },
      {
        title: "Nilai P2",
        dataIndex: "p2",
        key: "p2",
        sorter: (a, b) => a.p2 - b.p2,
        sortOrder: sortedInfo.columnKey === "p2" && sortedInfo.order
      },
      {
        title: "Nilai P3",
        dataIndex: "p3",
        key: "p3",
        sorter: (a, b) => a.p3 - b.p3,
        sortOrder: sortedInfo.columnKey === "p3" && sortedInfo.order
      },
      {
        title: "Nilai P4",
        dataIndex: "p4",
        key: "p4",
        sorter: (a, b) => a.p4 - b.p4,
        sortOrder: sortedInfo.columnKey === "p4" && sortedInfo.order
      },
      {
        title: "Total Nilai P",
        dataIndex: "total",
        key: "total",
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === "total" && sortedInfo.order
      }
    ];

    return (
      <div>
        <div className="table-operations" />
        {tabelUtama ? (
          <React.Suspense fallback={<div>Loading....</div>}>
            <Table
              columns={columns}
              dataSource={dataTotal}
              onChange={this.handleChange}
              // Warning: Each record in table should have a unique `key` prop,
              // or set `rowKey` to an unique primary key.
              rowKey="nip_nim" //to prevent error above
            />
          </React.Suspense>
        ) : (
          <div>
            <Button
              onClick={this.onChangeTable.bind(this, 0, false)}
              style={{ marginBottom: 10 }}
            >
              Kembali ke Daftar Penilaian
            </Button>
            <Table
              columns={columnDetail}
              dataSource={dataDetail}
              onChange={this.handleChange}
              rowKey="nip_nim"
            />
          </div>
        )}
      </div>
    );
  }
}

export default TablePenilaian;
