import React from 'react';
import Card from '../../components/Card';

export default ({feedback}) => (
    <div className="flex-auto px-2 lg:w-1/3 sm:w-1/2">
    <Card className="mb-8 flex items-center">
        <p className="mt-4">
            {feedback}
        </p>
    </Card>
    </div>
);
