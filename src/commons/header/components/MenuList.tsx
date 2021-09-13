import * as React from 'react'
import { useHistory } from "react-router-dom"
import { Menu } from 'antd'
// import { IMenu, IStore, StContext } from '../../../store'

// const { SubMenu } = Menu
const menuList = [
  {
    "title": "首页",
    "path": "/"
  },
  {
      "title": "H5",
      "path": "/html"
  },
  {
      "title": "JavaScript",
      "path": "/javascript"
  },
  {
      "title": "React",
      "path": "/react"
  },
  {
      "title": "Vue",
      "path": "/vue"
  },
  {
      "title": "Flutter",
      "path": "/flutter"
  },
  {
      "title": "Node",
      "path": "/node"
  },
  {
      "title": "Other",
      "path": "/other"
  },
  {
      "title": "关于",
      "path": "/about"
  }
]

//列表递归获取
// const getMenuNodes = (list: Array<IMenu>) => {
//   return list.map(item => {
//     if (!item.children) {
//       return (
//         <Menu.Item key={item.path}>
//             <span>{item.title}</span>
//         </Menu.Item>
//       )
//     } else {
//       return (
//         <SubMenu key={item.path} title={<span>{item.title}</span>}>
//           {getMenuNodes(item.children)}
//         </SubMenu>
//       )
//     }
//   })
// }

const MenuList: React.FC = () => {
  let history = useHistory()
  const [pathName, clickTag] = React.useState(history.location.pathname)
	// const store: IStore = React.useContext(StContext)
  // const menuList = store.state.menuList

	return React.useMemo(() => {
    return (
      <Menu 
        onClick={(e: any) => {
          clickTag(e.key)
          history.push(e.key)
        }} 
        selectedKeys={[pathName]} 
        mode="horizontal"
      >
        {
          menuList.map(item => {
            return (
              <Menu.Item key={item.path}>
                  <span>{item.title}</span>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }, [ pathName, history])
}

export default MenuList