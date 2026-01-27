'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Plus, CheckCircle2, Clock, X } from 'lucide-react';
import InventoryRequestModal from '@/components/worker/inventory-request-modal';

interface InventoryItem {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    status: 'Good' | 'Low' | 'Damaged';
    location: string;
    lastUpdated: string;
}

interface InventoryRequest {
    id: string;
    itemName: string;
    quantity: number;
    requestedDate: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    reason: string;
}

const sampleInventory: InventoryItem[] = [
    {
        id: '1',
        name: 'Safety Gloves (Large)',
        quantity: 5,
        unit: 'Box',
        status: 'Low',
        location: 'Shelf A1',
        lastUpdated: '2025-01-26',
    },
    {
        id: '2',
        name: 'Protective Goggles',
        quantity: 15,
        unit: 'Piece',
        status: 'Good',
        location: 'Shelf B2',
        lastUpdated: '2025-01-25',
    },
    {
        id: '3',
        name: 'Hard Hats',
        quantity: 0,
        unit: 'Piece',
        status: 'Damaged',
        location: 'Shelf C1',
        lastUpdated: '2025-01-20',
    },
    {
        id: '4',
        name: 'Work Boots',
        quantity: 8,
        unit: 'Pair',
        status: 'Good',
        location: 'Storage Room 2',
        lastUpdated: '2025-01-24',
    },
    {
        id: '5',
        name: 'Safety Vests',
        quantity: 3,
        unit: 'Piece',
        status: 'Low',
        location: 'Shelf A3',
        lastUpdated: '2025-01-26',
    },
];

const sampleRequests: InventoryRequest[] = [
    {
        id: '1',
        itemName: 'Safety Gloves (Large)',
        quantity: 5,
        requestedDate: '2025-01-25',
        status: 'Approved',
        reason: 'Running low on stock',
    },
    {
        id: '2',
        itemName: 'Hard Hats',
        quantity: 10,
        requestedDate: '2025-01-26',
        status: 'Pending',
        reason: 'Current batch damaged during handling',
    },
];

export default function InventoryPage() {
    const [inventory] = useState(sampleInventory);
    const [requests, setRequests] = useState(sampleRequests);
    const [showRequestModal, setShowRequestModal] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Good':
                return 'text-green-600 bg-green-50 border-green-200';
            case 'Low':
                return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'Damaged':
                return 'text-destructive bg-red-50 border-red-200';
            default:
                return '';
        }
    };

    const getRequestStatusIcon = (status: string) => {
        switch (status) {
            case 'Approved':
                return <CheckCircle2 className="w-5 h-5 text-green-600" />;
            case 'Rejected':
                return <X className="w-5 h-5 text-destructive" />;
            default:
                return <Clock className="w-5 h-5 text-orange-600" />;
        }
    };

    const handleAddRequest = (newRequest: InventoryRequest) => {
        setRequests([...requests, newRequest]);
        setShowRequestModal(false);
    };

    const reportIssue = (itemId: string, issueType: 'low' | 'damaged' | 'usage') => {
        console.log(`Reported ${issueType} for item ${itemId}`);
    };

    return (
        <div className="py-12 space-y-6 w-[95%] mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
                <Button
                    onClick={() => setShowRequestModal(true)}
                    className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Request Item
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">Assigned Items</p>
                    <p className="text-3xl font-bold text-primary">{inventory.length}</p>
                </Card>
                <Card className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">Pending Requests</p>
                    <p className="text-3xl font-bold text-orange-600">
                        {requests.filter(r => r.status === 'Pending').length}
                    </p>
                </Card>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Your Inventory</h3>
                <div className="space-y-3">
                    {inventory.map(item => (
                        <Card key={item.id} className="p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">Location: {item.location}</p>
                                    <p className="text-lg font-bold text-primary">
                                        {item.quantity} {item.unit}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {item.status === 'Low' && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => reportIssue(item.id, 'low')}
                                            className="flex items-center gap-2"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            Low Stock
                                        </Button>
                                    )}
                                    {item.status === 'Damaged' && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => reportIssue(item.id, 'damaged')}
                                            className="flex items-center gap-2 text-destructive border-destructive hover:bg-red-50"
                                        >
                                            <AlertCircle className="w-4 h-4" />
                                            Report Damaged
                                        </Button>
                                    )}
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => setShowRequestModal(true)}
                                        className="flex items-center gap-2"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Request More
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Your Requests</h3>
                <div className="space-y-3">
                    {requests.length === 0 ? (
                        <Card className="p-8 text-center">
                            <p className="text-muted-foreground">No requests yet</p>
                        </Card>
                    ) : (
                        requests.map(req => (
                            <Card key={req.id} className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            {getRequestStatusIcon(req.status)}
                                            <div>
                                                <h4 className="font-semibold text-foreground">{req.itemName}</h4>
                                                <p className="text-sm text-muted-foreground">Quantity: {req.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{req.reason}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-primary">{req.status}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {new Date(req.requestedDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>

            <InventoryRequestModal
                open={showRequestModal}
                availableItems={inventory.map(i => i.name)}
                onClose={() => setShowRequestModal(false)}
                onSubmit={handleAddRequest}
            />
        </div>
    );
}
