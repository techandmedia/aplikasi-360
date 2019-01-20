import React from "react";
import { Table, Button } from "antd";

import { getDetailPenilaian } from "../Fetch/PostData";

import { dapatkanNilai } from "../Calcultaion/filter";

class TablePenilaian extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    tabelUtama: true,
    detilPenilaian: [],
    status: false
  };

  componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {
  // }

  getDetilPenilaian = nip_nim => {
    const URL = this.props.URL;
    getDetailPenilaian(URL, nip_nim).then(response => {
      // console.log(response.data);
      this.setState({
        detilPenilaian: response.data.map(data => ({
          nip_nim: data.nip_nim,
          name: data.name,
          p1: data.p1.toFixed(1),
          p2: data.p2.toFixed(1),
          p3: data.p3.toFixed(1),
          p4: data.p4.toFixed(1),
          total: data.total.toFixed(1)
        }))
      });
    });
    return null;
  };

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

  onChangeTable = (nip_nim, record) => {
    console.log(record);
    if (record) {
      this.getDetilPenilaian(nip_nim);
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
    const { dataUser, questions } = this.props;
    const dataTotal = dapatkanNilai(dataUser, questions);
    console.log(this.state.tabelDetil);

    let {
      sortedInfo,
      // filteredInfo,
      tabelDetil,
      tabelUtama,
      detilPenilaian
    } = this.state;
    sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
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
          <Table
            columns={columns}
            dataSource={dataTotal}
            onChange={this.handleChange}
            // Warning: Each record in table should have a unique `key` prop,
            // or set `rowKey` to an unique primary key.
            rowKey="nip_nim" //to prevent error above
          />
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
              dataSource={detilPenilaian}
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
