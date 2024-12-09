<?php

namespace App\Mail;

use App\Models\Pintura;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class StorePinturaMail extends Mailable
{
    use Queueable, SerializesModels;

    private Pintura $pintura;
    /**
     * Create a new message instance.
     */
    public function __construct(Pintura $pintura)
    {
     $this -> pintura = $pintura;   
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Store pintura Mail',
        );
    }

    public function build()
    {
        return $this->view('emails.store-pintura-mail', [
            'pintura' => $this->pintura
        ]);
    }

    /**
     * Get the message content definition.
     */


    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
