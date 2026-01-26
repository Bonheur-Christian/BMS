'use client';

import React from "react"

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  onClose: () => void;
  onSubmit: (request: InventoryRequest) => void;
}

export default function InventoryRequestModal({
  availableItems,
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Request Inventory Item</h2>
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
