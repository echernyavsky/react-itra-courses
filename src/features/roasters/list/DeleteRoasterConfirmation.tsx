import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { FormattedMessage } from "react-intl";
import { DeleteIcon } from "../../../components/icons/DeleteIcon.tsx";

interface DeleteRoasterConfirmationProps {
  onDelete: () => Promise<void>;
}

export default function DeleteRoasterConfirmation({
  onDelete,
}: DeleteRoasterConfirmationProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip
        color="danger"
        content={<FormattedMessage id="roasters.table.actions.delete" />}
      >
        <span className="cursor-pointer text-lg text-danger active:opacity-50">
          <DeleteIcon onClick={onOpen} />
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => {
            const onConfirm = async () => {
              try {
                await onDelete();
              } catch (e) {
                alert(`Something went wrong: ${e.message}`);
              } finally {
                onClose();
              }
            };

            return (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Confirmation
                </ModalHeader>
                <ModalBody>
                  <p>
                    You're going to delete a roaster forever. Please, confirm
                    you action.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="danger" onPress={onConfirm}>
                    Delete Anyway
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
}
