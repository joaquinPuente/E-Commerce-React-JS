import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='cat'>
        <Menu isLazy>
          <MenuButton>{greeting}</MenuButton>
          <MenuList>
            <MenuItem>Urbanas</MenuItem>
            <MenuItem>Deportivas</MenuItem>
          </MenuList>
        </Menu>
    </div>
  )
}

export default ItemListContainer