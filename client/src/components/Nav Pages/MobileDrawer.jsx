import {
  Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton
} from '@chakra-ui/react';

function MobileDrawer({ btnRef, isOpen, onClose }) {

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}
      colorScheme={'whiteAlpha'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          ABCD
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer;