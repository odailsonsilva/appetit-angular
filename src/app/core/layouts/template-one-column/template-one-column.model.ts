export interface SideBarFormat {
  data: FormatContentSideBar[],
  logotype: string,
  sectionSelected: string,
  subSectionSelected: string,
  isClosed: boolean
}

interface FormatContentSideBar{
  label: string,
  value: string,
  icon: string,
  ss: []
}

export interface HeaderDataFormat {
  label: string;
  editableTitle: boolean
}
