import React from "react";
import { Table, Button } from "antd";

import { getPenilaianPenilai, getPertanyaan, getUser } from "../Fetch/GetData";
import { getDetailPenilaian } from "../Fetch/PostData";

import {
  HitungC1,
  HitungC2,
  HitungC3,
  HitungC4,
  HitungC5,
  HitungC6,
  HitungC7
} from "../Calcultaion/calcultate";

class TablePenilaian extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    dataPenilaian: [],
    tabelUtama: true,
    tabelDetil: false,
    detilPenilaian: [],
    rawPertanyaan: [],
    hasilPenilaian: []
  };

  componentDidMount() {
    // this.getDataUser();
    this.getDataPenilaian();
    this.getDataPertanyaan();
    // this.getDataC();
  }

  componentDidUpdate() {
    this.getDataC();
  }

  getDataPertanyaan = () => {
    const URL = this.props.URL;
    getPertanyaan(URL).then(response => {
      // console.log(response.data);
      this.setState({
        rawPertanyaan: response.data.map(data => ({
          primary_id: data.primary_id,
          user_id: data.user_id,
          responden_id: data.responden_id,
          role_id: data.role_id,
          K001: data.K001,
          K002: data.K002,
          K003: data.K003,
          K004: data.K004,
          K005: data.K005,
          K006: data.K006,
          K007: data.K007,
          K008: data.K008,
          K009: data.K009,
          K010: data.K010,
          K011: data.K011,
          K012: data.K012,
          K013: data.K013,
          K014: data.K014,
          K015: data.K015,
          K016: data.K016,
          K017: data.K017,
          K018: data.K018,
          K019: data.K019,
          K020: data.K020,
          K021: data.K021,
          K022: data.K022,
          K023: data.K023,
          K024: data.K024,
          K025: data.K025,
          K026: data.K026,
          K027: data.K027,
          K028: data.K028,
          K029: data.K029,
          K030: data.K030
        }))
      });
      // console.log(this.state.rawPertanyaan);
    });
    return null;
  };

  getDataPenilaian = () => {
    const URL = this.props.URL;
    getPenilaianPenilai(URL).then(response => {
      // console.log(response.data);
      this.setState({
        dataPenilaian: response.data.map(data => ({
          nip_nim: data.nip_nim,
          name: data.name,
          total: data.total.toFixed(1),
          hasil: data.hasil
        }))
      });
      // console.log(this.state.dataPenilaian);
    });
    return null;
  };

  // getDataUser = () => {
  //   const URL = this.props.URL;
  //   getUsers(URL).then(response => {
  //     console.log(response);
  //   });
  // };

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
      // console.log(this.state.detilPenilaian);
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
        tabelUtama: false,
        tabelDetil: true
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true,
        tabelDetil: false
      });
    }
  };

  getDataC = () => {
    this.state.rawPertanyaan.map(data => {
      const role_id = data.role_id;
      const K001 = role_id === 1 ? data.K001 : 0;
      const K002 = role_id === 1 ? data.K002 : 0;
      const K003 = role_id === 1 ? data.K003 : 0;
      const K004 = role_id === 1 ? data.K004 : 0;
      const K005 = data.K005;
      const K006 = data.K006;
      const K007 = data.K007;
      const K008 = data.K008;
      const K009 = data.K009;
      const K010 = data.K010;
      const K011 = data.K011;
      const K012 = data.K012;
      const K013 = data.K013;
      const K014 = data.K014;
      const K015 = data.K015;
      const K016 = data.K016;
      const K017 = data.K017;
      const K018 = data.K018;
      const K019 = data.K019;
      const K020 = data.K020;
      const K021 = data.K021;
      const K022 = data.K022;
      const K023 = data.K023;
      const K024 = data.K024;
      const K025 = data.K025;
      const K026 = data.K026;
      const K027 = data.K027;
      const K028 = data.K028;
      const K029 = data.K029;
      const K030 = data.K030;

      const C1 = HitungC1(K001, K002, K003, K004);
      const TotalC1 = C1.K1 + C1.K2 + C1.K3 + C1.K4;

      const C2 = HitungC2(role_id, K005, K006, K007);
      const TotalC2 = C2.K5 + C2.K6 + C2.K7;

      const C3 = HitungC3(role_id, K008, K009, K010);
      const TotalC3 = C3.K8 + C3.K9 + C3.K10;

      const C4 = HitungC4(role_id, K011, K012, K013);
      const TotalC4 = C4.K11 + C4.K12 + C4.K13;

      const C5 = HitungC5(role_id, K014, K015, K016, K017);
      // const TotalC5 = C5.K14 + C5.K15 + C5.K16 + C5.K17;
      const TotalC5 = C5.K14 + C5.K15 + C5.K16 + C5.K17;

      const C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
      const TotalC6 = C6.K18 + C6.K19 + C6.K20 + C6.K21 + C6.K22 + C6.K23;

      const C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);
      const TotalC7 =
        C7.K24 + C7.K25 + C7.K26 + C7.K27 + C7.K28 + C7.K29 + C7.K30;

      const TotalNilai =
        TotalC1 + TotalC2 + TotalC3 + TotalC4 + TotalC5 + TotalC6 + TotalC7;
      const hasil = function hasil() {
        if (TotalNilai > 20) {
          return "Sangat Bagus Sekali";
        } else if (TotalNilai === 20 && TotalNilai > 18) {
          return "Bagus Sekali";
        } else if (TotalNilai === 18 && TotalNilai > 14) {
          return "Bagus";
        } else if (TotalNilai === 14 && TotalNilai > 10) {
          return "Cukup Bagus";
        } else if (TotalNilai < 11) {
          return "Sangat Tidak Bagus";
        }
      };

      // Untuk mendapatkan total penilaian, gunakan Tabel Pertanyaan
      // Lalu ambil nama/id user bersangkutan
      // Pengulangan sebanyak 4x
      //            role id 1, 2, 3, 4
      //
      //

      // let allUsers = [
      //   (user_1 = {
      //     P1: role_id_1,
      //     P2: role_id_2,
      //     P3: role_id_3
      //   }),
      //   (user_2 = {
      //     P1: role_id_1,
      //     P2: role_id_2,
      //     P3: role_id_3
      //   })
      // ];

      getUser(this.props.URL, data.user_id).then(response => {
        const nip_nim = response.data[0].nip_nim;
        const name = response.data[0].name;
        this.state.hasilPenilaian.push({
          user_id: nip_nim,
          name: name,
          TotalC1: TotalC1.toFixed(2),
          TotalC2: TotalC2.toFixed(2),
          TotalC3: TotalC3.toFixed(2),
          TotalC4: TotalC4.toFixed(2),
          TotalC5: TotalC5.toFixed(2),
          TotalC6: TotalC6.toFixed(2),
          TotalC7: TotalC7.toFixed(2),
          TotalNilai: TotalNilai.toFixed(2)
        });
      });
      return null;
    });
  };

  render() {
    console.log(this.state.hasilPenilaian);
    // console.log(this.props.currentUser);

    let {
      sortedInfo,
      // filteredInfo,
      dataPenilaian,
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
        <div className="table-operations">
          <Button
            onClick={this.onChangeTable.bind(this, 0, false)}
            style={{ marginBottom: 10 }}
          >
            Kembali ke Daftar Penilaian All Users
          </Button>
        </div>
        {tabelUtama ? (
          <Table
            columns={columns}
            dataSource={dataPenilaian}
            onChange={this.handleChange}
            // Warning: Each record in table should have a unique `key` prop,
            // or set `rowKey` to an unique primary key.
            rowKey="nip_nim" //to prevent error above
          />
        ) : tabelDetil ? (
          <Table
            columns={columnDetail}
            dataSource={detilPenilaian}
            onChange={this.handleChange}
            rowKey="nip_nim"
          />
        ) : null}
      </div>
    );
  }
}

export default TablePenilaian;
