'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InventoryRequest {
  id: string;
  itemName: string;
  quantity: number;
  requestedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

interface InventoryRequestModalProps {
  availableItems: string[];
  open: boolean;
  onClose: () => void;
  onSubmit: (request: InventoryRequest) => void;
}

export default function InventoryRequestModal({
  availableItems,
  open,
  onClose,
  onSubmit,
}: InventoryRequestModalProps) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!itemName || !quantity || !reason) {
      alert('Please fill in all fields');
      return;
    }

    const newRequest: InventoryRequest = {
      id: Date.now().toString(),
      itemName,
      quantity: parseInt(quantity),
      requestedDate: new Date().toISOString().split('T')[0],
      status: 'Pending',
      reason,
    };

    onSubmit(newRequest);
    setItemName('');
    setQuantity('');
    setReason('');
  };

  const reasonOptions = [
    'Running low on stock',
    'Current batch damaged',
    'Usage consumed',
    'Urgent need',
    'Other',
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Request Inventory Item</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Item Name</label>
            <select
              value={itemName}
              onChange={e => setItemName(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
            >
              <option value="">Select an item or type new</option>
              {availableItems.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
              <option value="other">Other (specify below)</option>
            </select>
            {itemName === 'other' && (
              <input
                type="text"
                placeholder="Enter item name"
                onChange={e => setItemName(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded bg-background text-foreground mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Quantity Needed</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Reason for Request</label>
            <select
              value={reason}
              onChange={e => setReason(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
            >
              <option value="">Select a reason</option>
              {reasonOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
