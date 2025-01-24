

export const updateKeyboardLayout = (layout, targetKey, newStatus) => {
    return layout.map((row) =>
        row.map((key) =>
            key.key === targetKey ? { ...key, status: newStatus } : key
        )
    );
};