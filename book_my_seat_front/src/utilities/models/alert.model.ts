export interface AlertDto {
    type: string;
    message: string;
    options: {
        key: number;
        varient: 'error' | 'warning' | 'info' | 'success';
        persist?: boolean;
        autoHideDuration?: number;
        anchorOrigin?: {
            vertical?: 'top'|'bottom',
            horizontal?: 'right'|'left'|'center'
          },
    }
}
