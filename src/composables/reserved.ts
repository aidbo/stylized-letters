// 有一些字符在 Unicode 中为了避免重复编码，需要转换成另一个字符
// http://www.unicode.org/charts/PDF/U1D400.pdf
export const reserved: { original: number, target: number }[] = [
  {
    original: 0x1D455,
    target: 0x210E,
  },
  {
    original: 0x1D49D,
    target: 0x212C,
  },
  {
    original: 0x1D4A0,
    target: 0x2130,
  },
  {
    original: 0x1D4A1,
    target: 0x2131,
  },
  {
    original: 0x1D4A3,
    target: 0x210B,
  },
  {
    original: 0x1D4A4,
    target: 0x2110,
  },
  {
    original: 0x1D4A7,
    target: 0x2112,
  },
  {
    original: 0x1D4A8,
    target: 0x2133,
  },
  {
    original: 0x1D4AD,
    target: 0x211B,
  },
  {
    original: 0x1D4BA,
    target: 0x212F,
  },
  {
    original: 0x1D4BC,
    target: 0x210A,
  },
  {
    original: 0x1D4C4,
    target: 0x2134,
  },
  {
    original: 0x1D506,
    target: 0x212D,
  },
  {
    original: 0x1D50B,
    target: 0x210C,
  },
  {
    original: 0x1D50C,
    target: 0x2111,
  },
  {
    original: 0x1D515,
    target: 0x211C,
  },
  {
    original: 0x1D51D,
    target: 0x2128,
  },
  {
    original: 0x1D53A,
    target: 0x2102,
  },
  {
    original: 0x1D53F,
    target: 0x210D,
  },
  {
    original: 0x1D545,
    target: 0x2115,
  },
  {
    original: 0x1D547,
    target: 0x2119,
  },
  {
    original: 0x1D548,
    target: 0x211A,
  },
  {
    original: 0x1D549,
    target: 0x211D,
  },
  {
    original: 0x1D551,
    target: 0x2124,
  },
]
