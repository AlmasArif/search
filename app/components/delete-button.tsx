'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Trash } from 'lucide-react';
import { deleteUser } from '@/app/actions/actions';
import { toast } from "@/hooks/use-toast";
import { Modal } from "@/components/ui/modal"; // Import your modal component

export default function DeleteButton({ userId }: { userId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUser(userId);
      toast({
        title: "User Deleted",
        description: `A user with the ID ${userId} has been deleted.`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while deleting the user.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setIsModalOpen(false); // Close the modal after deletion attempt
    }
  };

  return (
    <>
      {/* The Delete Button */}
      <Button onClick={() => setIsModalOpen(true)} variant="destructive">
        <Trash className="w-4 h-4 mr-2" />
        Delete
      </Button>

      {/* The Confirmation Modal */}
      {isModalOpen && (
        <Modal
          title="Confirm Deletion"
          description="Are you sure you want to delete this user? This action cannot be undone."
          onCancel={() => setIsModalOpen(false)} // Close modal on cancel
          onConfirm={handleDelete} // Proceed with deletion on confirm
          confirmText={isLoading ? "Deleting..." : "Confirm"}
          isConfirmDisabled={isLoading} // Disable confirm button while loading
        />
      )}
    </>
  );
}
