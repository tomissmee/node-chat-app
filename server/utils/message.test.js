var expect = require('expect');
var request = require('supertest');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {

        var from = 'Hin';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var latitude = 12;
        var longitude = 23;
        var url = 'https://www.google.com/maps?q=12,23';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});

    });
});