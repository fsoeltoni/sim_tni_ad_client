export const identity = {
  name: "sim",
  options: {
    label: "SIM"
  }
};

export const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  no_identitas: {
    source: "no_identitas",
    label: "No. Identitas"
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  berlaku_hingga: {
    source: "berlaku_hingga",
    label: "Berlaku Hingga"
  },
  created: {
    source: "created",
    label: "Dibuat Pada"
  }
};

export const steps = [
  "Keterangan",
  "Personel",
  "Pas Foto",
  "Tanda Tangan",
  "Sidik Jari"
];

export const components = {
  list: {
    title: "Daftar " + identity.options.label
  },
  create: {
    title: "Tambah " + identity.options.label
  }
};
